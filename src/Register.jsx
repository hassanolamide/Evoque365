import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Register = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedKeys,] = React.useState(new Set(["Age"]));
  const [backdrop, setBackdrop] = React.useState('blur');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    setBackdrop('blur'); 
    onOpen();  
  }, [onOpen]);

  const handleFormSubmit = (e) => {
    setLoading(true); 
    e.preventDefault();
    console.log("Form submitted");

    const templateParams = {
      to_name:"evoque",
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      gender: gender,
      age_range: ageRange,
    };

    emailjs.send('service_6jik5xq', 'template_5irz6i2', templateParams, 'di6TIW3ay6EoS8iPJ')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        onOpenChange(false); 
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setLoading(false);
        
      });
  };

  return (
    <div>
      <Modal backdrop={backdrop} isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleFormSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Register
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    endContent={
                      <FaUser className="text-1xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    placeholder="First name"
                    variant="bordered"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    endContent={
                      <FaUser className="text-1xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    placeholder="Last name"
                    type="text"
                    variant="bordered"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Input
                    endContent={
                      <FaPhoneAlt className="text-1xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    placeholder="Phone number"
                    variant="bordered"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Input
                    isClearable
                    type="email"
                    variant="bordered"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex py-2 px-1 justify-between w-[40%]">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                      checked={gender === 'Male'}
                      onChange={() => setGender('Male')}
                    >
                      Male
                    </Checkbox>
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                      checked={gender === 'Female'}
                      onChange={() => setGender('Female')}
                    >
                      Female
                    </Checkbox>
                  </div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" className="capitalize">
                        {ageRange || 'Select Age Range'}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Single selection example"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedKeys}
                      onSelectionChange={(keys) => setAgeRange(Array.from(keys).join(', '))}
                    >
                      <DropdownItem key="Less than 18">Less than 18</DropdownItem>
                      <DropdownItem key="18-22">18-22</DropdownItem>
                      <DropdownItem key="22-25">22-25</DropdownItem>
                      <DropdownItem key="26-29">26-29</DropdownItem>
                      <DropdownItem key="30+">30+</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                 <button disabled={loading}> {loading?"Loading" :"Submit" }</button>
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Register;
