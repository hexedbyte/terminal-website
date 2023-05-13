import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
} from "../../utils/funcs";
import { termContext } from "../Terminal";

const Contact: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "contact")) {
      contact.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);
  
  return (
    <HelpWrapper data-testid="contact">
      <ProjectsIntro></ProjectsIntro>
      {contact.map(({ title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
    </HelpWrapper>
  );
};

const contact = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/hexedbyte",
    tab: 3,
  },
  {
    id: 2,
    title: "Instagram",
    url: "https://instagram.com/hexedbyte",
    tab: 3,
  },
  {
    id: 3,
    title: "Twitter",
    url: "https://www.twitter.com/hexedbyte",
    tab: 1,
  },
];

export default Contact;
