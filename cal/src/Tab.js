import React, { Component } from 'react'

export default class Tab extends Component {

    state = {
        activeTab: 'tab1'
    }
    render() {
        return (
            <div>
                <button type="button"
                    onClick={(e) => { e.preventDefault(); this.setState({ activeTab: 'tab1' }) }}
                    className={this.state.activeTab === 'tab1' && 'active'}>
                    Tab1</button>

                <button type="button"
                    onClick={(e) => { e.preventDefault(); this.setState({ activeTab: 'tab2' }) }}
                    className={this.state.activeTab === 'tab2' && 'active'}>
                    Tab2</button>

                {this.state.activeTab === 'tab1' && <div>First page</div>}
                {this.state.activeTab === 'tab2' && <div>Second page</div>}


            </div>
        )
    }
}
