import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё',
                },
                {
                    key: 'chairs',
                    name: 'Стулья',
                },
                {
                    key: 'tables',
                    name: 'Столы',
                },
                {
                    key: 'sofas',
                    name: 'Диваны',
                },
                {
                    key: 'lamps',
                    name: 'Лампы',
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (<div onClick={() => this.props.chooseCategory(el.key)} key={el.key}>{el.name}</div>)
        )}
      </div>
    )
  }
}

export default Categories