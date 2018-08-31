import React, {component} from 'react';
import DivProva from './DivProva';
const axios = require('axios');

class DivProvas extends React.Component{

    constructor(props){
        super(props)
        this.state = {provas: []}
    }

    componentDidMount() {
        axios.get('http://10.6.2.91:3005/api/provas?filter[include]=inscricoes')
               .then((response) => {
                 this.setState({provas: response.data})
                 console.log(response.data)})
               .catch((error) => console.log(error));
      }

      render(){
          const provas = this.state.provas;

          return(
            <div>
                {provas.map((prova) => <DivProva key={prova.id} prova = {prova} />)}
            </div>
          );
      }

}

export default DivProvas;
