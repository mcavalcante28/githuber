
export default function SwitchColors(mode){

  const bright_theme = {
    primary_color: "#f6f8fa",
    secundary_color: "#24292e"
  };
  
  const dark_theme = {
    primary_color: "#24292e",
    secundary_color: "#f6f8fa"
  }
  const theme = mode => (mode === "dark" ? dark_theme : bright_theme);
  return theme;
}
