import { IOverlay } from '../../interfaces/IOverlay';
import { StyledOverlay } from '../styled/Overlay.styled';

const Overlay:React.FC<IOverlay> = ( { open, onClose } ) => {
  return <StyledOverlay open={open} onClick={onClose}/>;
};

export default Overlay;
