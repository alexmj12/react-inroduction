import * as React from "react";
import { inject, observer } from "mobx-react";
import { List, ListItem } from 'material-ui/List';

import AppStore, { APP_STORE, IAppStore } from "./stores/appStore";

import PlayerName from "./playerName";
import Player from "./player";
import Timer from "./timer";

@inject(APP_STORE)
@observer
export default class App extends React.Component<{}, {}> {
    private readonly appStore: IAppStore;

    constructor(props: {}, context: any) {
        super(props, context);

        this.appStore = this.props[APP_STORE] as IAppStore;
    }

    render() {
        return (
            <div>
                <h1><PlayerName name={this.appStore.player1.name} winner={this.appStore.player1.isWinning} /> VS <PlayerName name={this.appStore.player2.name} winner={this.appStore.player2.isWinning} /></h1>

                <Timer round={this.appStore.game.round} />

                <List>
                    <ListItem>
                        <Player
                            winner={true}
                            name={this.appStore.player1.name}
                            result={this.appStore.player1.result}
                            onWin={() => this.appStore.player1.onWin()}
                            onLoose={() => this.appStore.player1.onLoose()}
                        />
                    </ListItem>

                    <ListItem>
                        <Player
                            winner={false}
                            name={this.appStore.player2.name}
                            result={this.appStore.player2.result}
                            onWin={() => this.appStore.player2.onWin()}
                            onLoose={() => this.appStore.player2.onLoose()}
                        />
                    </ListItem>
                </List>

                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
};