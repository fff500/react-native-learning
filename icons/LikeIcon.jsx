import * as React from "react";
import Svg, { Path } from "react-native-svg";

const LikeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF6C00"
      d="M13.365 7.6h-.5a.5.5 0 0 0 .5.5v-.5Zm0-3.2h.5-.5ZM10.774 2v-.5a.5.5 0 0 0-.451.284l.45.216ZM7.319 9.2l-.451-.216a.5.5 0 0 0-.05.216h.5Zm0 8.8h-.5a.5.5 0 0 0 .5.5V18Zm9.742 0 .006-.5h-.006v.5Zm1.728-1.36-.494-.082v.001l.494.08Zm1.191-7.2.494.082V9.52l-.494-.081ZM18.253 7.6v.5h.005l-.005-.5ZM7.32 18v.5a.5.5 0 0 0 .5-.5h-.5Zm0-8.8h.5a.5.5 0 0 0-.5-.5v.5Zm6.546-1.6V4.4h-1v3.2h1Zm0-3.2c0-1.637-1.421-2.9-3.091-2.9v1c1.191 0 2.09.886 2.09 1.9h1Zm-3.542-2.616-3.455 7.2.901.432 3.455-7.2-.901-.432ZM6.819 9.2V18h1V9.2h-1Zm.5 9.3h9.742v-1H7.32v1Zm9.737 0c1.08.011 2.052-.72 2.226-1.78l-.987-.16c-.085.517-.585.947-1.229.94l-.01 1Zm2.226-1.778 1.192-7.2-.987-.164-1.192 7.2.987.164Zm1.192-7.201a2.02 2.02 0 0 0-.533-1.713l-.73.684c.231.245.326.562.276.867l.987.162Zm-.533-1.713a2.29 2.29 0 0 0-1.693-.708l.01 1a1.29 1.29 0 0 1 .954.392l.729-.684ZM18.253 7.1h-4.888v1h4.888v-1ZM7.32 17.5H4.727v1H7.32v-1Zm-2.592 0c-.714 0-1.227-.528-1.227-1.1h-1c0 1.195 1.034 2.1 2.227 2.1v-1ZM3.5 16.4v-5.6h-1v5.6h1Zm0-5.6c0-.572.513-1.1 1.227-1.1v-1c-1.193 0-2.227.905-2.227 2.1h1Zm1.227-1.1H7.32v-1H4.727v1Zm2.092-.5V18h1V9.2h-1Z"
    />
  </Svg>
);

export default LikeIcon;
