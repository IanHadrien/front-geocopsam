import PropTypes from 'prop-types';
import { Tooltip as ReactTooltip } from 'react-tooltip';

function Tooltip({ anchorSelect, text, html }) {
    return (

        <ReactTooltip
            anchorSelect={anchorSelect}
            content={text || html}
            style={{
                paddingRight: "8px",
                paddingLeft: "8px",
                paddingTop: "4px",
                paddingBottom: "4px",
                backgroundColor: "rgb(54, 54, 54)",
                zIndex: 20
            }}
        />
    );
}

Tooltip.propTypes = {
    anchorSelect: PropTypes.string,
    text: PropTypes.string,
    html: PropTypes.element
};

export default Tooltip;

