import CustomRouter from "./CustomRoute";

class Students extends CustomRouter{

    render(){
        if (!this.state.completedAnimation) {
            return (<div>
              {this.musicNotes}
            </div>);
          }
          return (
            <></>
          );

    }

}

export default Students;