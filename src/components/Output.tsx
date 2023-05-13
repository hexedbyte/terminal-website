import Clear from "./commands/Clear";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import Contact from "./commands/Contact";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "contact", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          clear: <Clear />,
          email: <Email />,
          help: <Help />,
          pwd: <GeneralOutput>/home/hexedbyte</GeneralOutput>,
          contact: <Contact />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>guest</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
