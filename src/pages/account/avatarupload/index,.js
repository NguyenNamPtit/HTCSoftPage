import React, { useState } from 'react';
import { Avatar, Button, Input, VStack, useToast } from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';

const AvatarUpload = () => {
  const [avatar, setAvatar] = useState(null);
  const toast = useToast();

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        toast({
          title: "Avatar uploaded.",
          description: "Your new avatar has been uploaded.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <VStack spacing={4}>
      <Avatar size="xl" src={avatar} />
      <Button leftIcon={<FaUpload />} onClick={() => document.getElementById('avatarInput').click()}>
        Upload Avatar
      </Button>
      <Input 
        type="file" 
        id="avatarInput" 
        hidden 
        onChange={handleUpload}
      />
    </VStack>
  );
};

export default AvatarUpload;
