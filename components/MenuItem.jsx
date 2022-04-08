import Link from "next/link";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";

const MenuItem = ({ children, to = "/", ...props }) => {
  const router = useRouter();
  const active = (router.asPath === to);
  return (
    <Link href={to}>
      <Text display="block" cursor="pointer" borderBottom={active ? '3px solid black' : 'none'} lineHeight="36px" {...props}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
