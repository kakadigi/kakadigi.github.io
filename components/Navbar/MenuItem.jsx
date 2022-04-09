import { useRouter } from "next/router";
import { Link, Text } from "@chakra-ui/react";

const MenuItem = ({ children, to = "/", ...props }) => {
  const router = useRouter();
  const active = router.asPath === to;

  const handleOnClick = (e) => {
    e.preventDefault();
    router.push(to);
  };

  return (
    <Link onClick={handleOnClick} style={{ textDecoration: "none" }}>
      <Text
        display="block"
        lineHeight="36px"
        borderBottom={active ? "3px solid #3938B8" : "none"}
        {...props}
      >
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
