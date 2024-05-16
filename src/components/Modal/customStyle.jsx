const customModuleStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo do overlay
    zIndex: 1000, // Ajuste a sua preferência
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'auto',
  },
  content: {
    top: '50%',
    zIndex:'999',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    // marginTop: '7rem',
    overflow: 'none',
  },
};
export default customModuleStyles


