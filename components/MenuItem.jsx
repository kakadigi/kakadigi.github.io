import { useRouter } from "next/router";
import { Link, Text } from "@chakra-ui/react";

const MenuItem = ({ children, to = "/", ...props }) => {
  const router = useRouter();
  const active = (router.asPath === to);

  const handleOnClick = (e) => {
    e.preventDefault();
    router.push(to);
  }

  return (
    <Link onClick={handleOnClick} style={{ textDecoration: 'none' }}>
      <Text display="block" borderBottom={active ? '3px solid black' : 'none'} lineHeight="36px" {...props}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
