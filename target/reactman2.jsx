class hello1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fssaf: true,
        sfa: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value    });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="fssaf"            
              type="checkbox"
              checked={this.state.fssaf}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="sfa"            
              type="number"
              value={this.state.sfa}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }