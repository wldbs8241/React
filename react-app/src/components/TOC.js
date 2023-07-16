import React, {Component} from "react";

class TOC extends Component{
    render(){
        console.log('TOC render')
        var lists = [];
        // state.contents
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
                <a 
                href={"/content/"+data[i].id}
                onClick={function(id, e){
                    // 다른 페이지로 가는거 방지
                    e.preventDefault();
                    // id 값 가져오기
                    this.props.onChangePage(id);
                }.bind(this, data[i].id)}
                >{data[i].title}</a>
                </li>);
            i += 1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>

        );
    }
}

export default TOC;