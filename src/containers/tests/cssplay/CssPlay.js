
import React, { Component } from 'react';
import './CssPlay.css';

class CssPlay extends Component {

    state = null;

    render() {
        return (
            <div>
                Css Player
                <br />
                <div className="row">
                    <div className="column1">
                        <div className="div1">box1</div>
                        <div className="div1">box2</div>
                        <div className="div1">box3</div>
                    </div>
                    <div className="column2">column2</div>
                    <div className="column3">
                        <div className="div1">box1</div>
                        <div className="div1">box2</div>
                    </div>
                    <div className="column4">
                      column 4 (with float:both)
                    </div>
                </div>
                <br />
                Overflow test
                <br />
                <div className="overflowTest">This text is really long and the height of its container is only 100 pixels. Therefore, a scrollbar is added to help the reader to scroll the content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</div>
            </div>
        );
    }
}

export default CssPlay;
