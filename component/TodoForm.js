import React, { Component } from 'react'
import TodoJob from './TodoJob'
import { Paper, Grid, Divider, TextField, Button, Typography } from '@material-ui/core'

class TodoForm extends Component {
    id = 2;
    state = {
        jobs: [
            {
                id: 0,
                task: '일찍 일어나기',
                done: false,
                trash: false
            },
            {
                id: 1,
                task: '정시 퇴근하기',
                done: false,
                trash: false
            }
        ]
    }
    handleInput = (e) => {
        e.preventDefault();
        const {value} = e.target.task;
        const job = {id: this.id++, task: value, done: false};
        const {jobs} = this.state;
        this.setState({
            jobs: jobs.concat(job)
        })
        e.target.task.value ='';
    }
    handleRemove = (id) => {
        const {jobs} = this.state;
        this.setState({
            jobs: jobs.map(
                job => job.id === id
                ? {...job, trash: true}
                : job
            )
        })
    }
    handleDone = (id) => {
        const {jobs} = this.state;
        this.setState({
            jobs: jobs.map(
                job => job.id === id
                ? {...job, done: true}
                : job
            )
        })
    }
    handleDone
    render() {
        const {jobs} = this.state;
        const list = jobs.map(
            job => (!job.trash && !job.done &&
                    <TodoJob
                        key = {job.id}
                        job = {job}
                        onRemove={this.handleRemove}
                        onDone={this.handleDone}
                    />
                )
        )
        const done_list = jobs.map(
            job => (!job.trash && job.done &&
                    <TodoJob
                        key = {job.id}
                        job = {job}
                        onRemove={this.handleRemove}
                    />
                )
        )
        const styles = {
            container: {
                minHeight: '100vh'
            },
            paper: {
                padding: '16px',
                width: '100%'
            },
            divider: {
                marginTop: '8px'
            },
            form: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
            },
            button: {
                verticalAlign: "middle",
                float: "right",
                height: "32px",
            }
        }
        return(
            <Grid container spacing={0} justify="center" direction="column" alignItems="center" style={styles.container}>
                <Grid item xs={12}>
                    <Paper elevation={3} style={styles.paper}>
                        <Typography variant="h5">할 일 없나요?</Typography>
                        <form style={styles.form} onSubmit={this.handleInput}>
                            <TextField
                                label="할 일" 
                                name="task"
                                type="text"
                                width="auto"
                            />
                            <Button variant="contained" color="primary" style={styles.button} type="submit">V</Button>
                        </form>
                        <Divider style={styles.divider} />
                        <Typography variant="caption">남은 일</Typography>
                        <div>
                            {list}
                        </div>
                        <Divider style={styles.divider} />
                        <Typography variant="caption">끝낸 일</Typography>
                        <div>
                            {done_list}
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default TodoForm