import * as React from "react";
import { inject, observer } from "mobx-react";

import AppStore, { APP_STORE } from "./stores/appStore";

import Player from "./player";
import Timer from "./timer";

@inject(APP_STORE)
export default class App extends React.Component<{}, {}> {
    private readonly appStore: AppStore;

    constructor(props: {}, context: any) {
        super(props, context);

        this.appStore = this.props[APP_STORE]  as AppStore;
    }

    render() {
        return (
            <div>
                <h1>{this.appStore.title} result:</h1>

                <Timer round={this.appStore.round}/>

                {this.appStore.winner &&
                 <section>
                    <h2>Winning {this.appStore.winner}</h2>
                </section>}

                <section>
                    <Player
                        name="Player 1"
                        result={0}
                        onWin={() => { }}
                        onLoose={() => { }}
                    />
                </section>

                <section>
                    <Player
                        name="Player 2"
                        result={0}
                        onWin={() => { }}
                        onLoose={() => { }}
                    />
                </section>
                
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
};