import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { mobs } = this.props;
        return (
            <div className="card-list">
                {
                    mobs.map(
                        (m) => {
                            return (
                                <Card mob={ m } />
                            )
                        }
                    )
                }
            </div>
        );
    }
}

export default CardList;