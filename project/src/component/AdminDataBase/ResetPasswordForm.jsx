import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { resetPassFun } from "../../redux/AdminReducer/action";

export default function ResetPasswordForm() {
  const [userData, setuserData] = useState({ mail: "", pass: "" });

  const toast = useToast();

  const sucessToast = (title, des) => {
    toast({
      title: title,
      description: des,
      status: "success",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };

  const wrongPassToast = (title, des) => {
    toast({
      title: title,
      description: des,
      status: "error",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };
  const defaultPassToast = () => {
    toast({
      title: `Default Password is 1111`,
      description: "You can also reset from forget password",
      status: "info",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };
  const wrongEmailToast = (title, des) => {
    toast({
      title: title,
      description: des,
      status: "warning",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log("hiii");
    const { mail, pass } = userData;
    resetPassFun(
      mail,
      pass,
      sucessToast,
      wrongEmailToast,
      wrongPassToast,
      defaultPassToast
    );

    setuserData({ mail: "", pass: "" });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <form onSubmit={handleReset}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Stack align={"center"} maxW={"xxl"}>
            <Heading fontSize={"4xl"}>Reset your Pasword !!</Heading>
          </Stack>

          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Enter new password
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="admin@gmail.com"
              _placeholder={{ color: "gray.500" }}
              value={userData.mail}
              onChange={(e) => {
                setuserData({ ...userData, mail: e.target.value });
              }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              value={userData.pass}
              onChange={(e) => {
                setuserData({ ...userData, pass: e.target.value });
              }}
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              type="submit"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Reset
            </Button>
          </Stack>
        </Stack>
      </form>
    </Flex>
  );
}
