import React, { Component } from 'react'
import { Button, Typography } from '@material-ui/core'

class TodoJob extends Component {
    static defaultProps = {
        job: {id: 0, task: '기본 테스크', done: false},
        onRemove: () => console.warn('onRemove not defined')
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps === this.props
    }
    onRemove = () => {
        const {job, onRemove} = this.props
        onRemove(job.id)
    }
    onDone = () => {
        const {job, onDone} = this.props
        onDone(job.id)
    }
    render() {
        const styles = {
            item: {
                marginTop: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            },
            button: {
                margin: "4px"
            },
            typo: {
                display: "inline",
                marginRight: "16px"
            }
            
        }
        const {job} = this.props;
        if(job.done) {
            return(
                <div style={styles.item}>
                    <Typography variant="body1"><s>{job.task}</s></Typography>
                    <div>
                        <Button style={styles.button} variant="contained" color="secondary" onClick={this.onRemove}>X</Button>
                    </div>
                </div>
            );
        }
        return(
            <div style={styles.item}>
                <Typography style={styles.typo} variant="body1">{job.task}</Typography>
                <div>
                    <Button style={styles.button} variant="contained" color="primary" onClick={this.onDone}>V</Button>
                    <Button style={styles.button} variant="contained" color="secondary" onClick={this.onRemove}>X</Button>
                </div>
            </div>
        );
    }
}

export default TodoJob