import React from 'react'
import  {} from 'react-native'


export default class Carousel extends React.Component{
    static propTypes = {
        teachs: React.propTypes.array
    }

    constructor (props){
        super(props)
    }

    render(){
        return(
            <View style ={{flex : 1}}>
                {this.props.teachs.map((teach, k)=>{
                    return (
                        <Image key={k} source={{uri: teach}} style={{width: 50,height: 50 }} />
                    )
                })}

            </View>
        )
    }


}
