import React from 'react';
import axios from 'axios';
import FormInput from '../form/FormInput';

export default class NewHousehold extends React.Component {
    state = {
        name: "",
        address: "",
        description: "",
        items: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.description === "" || this.state.address === "" ) {
            alert("ERROR: Please fill out the form correctly.");
        } else {
            axios.post(`https://cst391nodejs.herokuapp.com/households/`, this.state)
            .then(result => {
                console.log(result.data);
                alert(result.data.httpMessage);
                this.props.history.push("/");
                this.props.history.go(0);
            });
        }
    }

    updateName = (t) => {
        this.setState({name: t}, () => {
            console.log("State of form = ", this.state);
        });
    }

    updateAddress = (t) => {
        this.setState({address: t}, () => {
            console.log("State of form = ", this.state);
        });
    }

    updateDescripion = (t) => {
        this.setState({description: t}, () => {
            console.log("State of form = ", this.state);
        });
    }
    
    handleCancel = (e) => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container">
                <div className="col mx-auto w-50">
                    <form>
                        <div className="form-group">
                            <h3>New Household:</h3>
                            <FormInput 
                                id="houseoldName"
                                title="Name"
                                type="text"
                                placeholder="Household Name"
                                onChange={this.updateName}
                            />
                            <FormInput 
                                id="houseoldAddress"
                                title="Address"
                                type="text"
                                placeholder="Household Address"
                                onChange={this.updateAddress}
                            />
                            <FormInput 
                                id="houseoldDescription"
                                title="Desc:"
                                type="text"
                                placeholder="Household Description"
                                onChange={this.updateDescripion}
                            />
                        </div>
                        <button type="button" onClick={this.handleSubmit} className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
