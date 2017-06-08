import * as React from "react";
import { inject, observer } from "mobx-react";

import AppStore, { APP_STORE, IAppStore } from "./stores/appStore";

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
                <h1>{this.appStore.title}:</h1>

                <Timer round={this.appStore.game.round}/>

                {this.appStore.winner &&
                 <section>
                    <h2>Winning {this.appStore.winner}</h2>
                </section>}

                <section>
                    <Player
                        name={this.appStore.player1.name}
                        result={this.appStore.player1.result}
                        onWin={() => this.appStore.player1.onWin()}
                        onLoose={() => this.appStore.player1.onLoose()}
                    />
                </section>

                <section>
                    <Player
                        name={this.appStore.player2.name}
                        result={this.appStore.player2.result}
                        onWin={() => this.appStore.player2.onWin()}
                        onLoose={() => this.appStore.player2.onLoose()}
                    />
                </section>
                
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
};