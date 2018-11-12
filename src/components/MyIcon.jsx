import mySvg from './mySvg.svg';
const MyIcon = (props) => { 
  return (
    <svgComponent svg={mySvg} />
  );
};

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
};

export default MyIcon;