
import React from "react";


class FilterDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.all_location = [
            { Id: 'chennai', Location: 'chennai' },
            { Id: 'bangalore', Location: 'Bangalore' },
            { Id: 'hyderabad', Location: 'Hyderabad' },
            { Id: 'kerela', Location: 'Kerela' },
            { Id: 'pune', Location: 'Pune' },
            { Id: 'delhi', Location: 'Delhi' },
            { Id: 'Cochin', Location: 'Cochin' }
        ];
        this.selectedLocation = [];
        this.all_location_fields = { text: 'Location', value: 'Id' };
    }

    handleLocationValue = () => {
        const {value} = this.selectedLocation;
    }

    

    render() {
        const {filterSelected} = this.props;
        return (
            <> 
                {filterSelected &&
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                        <div className="input-group">
                            <div className="input-group-append">
                                <input type="checkbox" className="custom-control-input" id="check1" />
                                <label className="custom-control-label" htmlFor="check1">Row 1</label>
                            </div>
                        </div>
                        </li>
                    </ul>    
                }
            </>
        );
    }
}

export default FilterDropDown;

