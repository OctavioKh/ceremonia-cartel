export default class Forma extends React.Component {
    	
    constructor(props) {

        super(props);		
        this.divRef = React.createRef();
        this.myHTML = "<p>Hello World!</p>";
    }
    	
    componentDidMount() {

        this.divRef.current.innerHTML = this.myHTML;
    }
    	
    render() {

        return (

            <div ref={this.divRef}></div>
        );
    }
}

