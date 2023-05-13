import {
  Cmd,
  HeroContainer,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

import {
  HighlightSpan,
  HighlightRed,
  HighlightSec,
} from "../styles/GlobalStyle";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`                                                                         
@@@  @@@  @@@@@@@@  @@@  @@@  @@@@@@@@  @@@@@@@   @@@@@@@   @@@ @@@  @@@@@@@  @@@@@@@@  
@@@  @@@  @@@@@@@@  @@@  @@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@ @@@  @@@@@@@  @@@@@@@@  
@@!  @@@  @@!       @@!  !@@  @@!       @@!  @@@  @@!  @@@  @@! !@@    @@!    @@!       
!@!  @!@  !@!       !@!  @!!  !@!       !@!  @!@  !@   @!@  !@! @!!    !@!    !@!       
@!@!@!@!  @!!!:!     !@@!@!   @!!!:!    @!@  !@!  @!@!@!@    !@!@!     @!!    @!!!:!    
!!!@!!!!  !!!!!:      @!!!    !!!!!:    !@!  !!!  !!!@!!!!    @!!!     !!!    !!!!!:    
!!:  !!!  !!:        !: :!!   !!:       !!:  !!!  !!:  !!!    !!:      !!:    !!:       
:!:  !:!  :!:       :!:  !:!  :!:       :!:  !:!  :!:  !:!    :!:      :!:    :!:       
::   :::   :: ::::   ::  :::   :: ::::   :::: ::   :: ::::     ::       ::     :: ::::  
 :   : :  : :: ::    :   ::   : :: ::   :: :  :   :: : ::      :        :     : :: ::                                                                                           
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
.-. .-..---..-..-..---..--. .--..-..-..---..---.
| |=| || |-  >  < | |- | \ \|-<  >  / \`| |'| |- 
\`-' \`-'\`---''-'\`-\`\`---'\`-'-'\`--' \`-'   \`-' \`---'
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to <HighlightSpan>hexedbyte</HighlightSpan> <HighlightRed>Red Teaming</HighlightRed>. (Version 1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
        <HighlightSpan>@</HighlightSpan> <HighlightSec>Assembling</HighlightSec> red teams around the globe.<br/>
        <HighlightSpan>@</HighlightSpan> <HighlightSec>Teaching</HighlightSec> red teaming over different channels.<br/>
        <br/>
        A red team is a group of people authorized and organized to emulate a potential adversary's attack or exploitation capabilities against an enterprise's security posture.
        </div>
        <Seperator>----</Seperator>
        <div>
          The list of available commands: `<Cmd>contact</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
