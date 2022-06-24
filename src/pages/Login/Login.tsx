import {
    Button, Checkbox, FormControl, FormControlLabel,
    FormGroup, FormLabel, Grid, TextField
} from "@mui/material"
import {useFormik} from "formik";


export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    })

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={() => {}}>
                <h1>Login</h1>
                <FormControl>
                    <FormLabel>

                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />
                        <FormControlLabel
                            label={'Remember me'}
                            control={
                                <Checkbox
                                    name='rememberMe'
                                    onChange={formik.handleChange}
                                    checked={formik.values.rememberMe}
                                />}
                        />
                        <Button
                            type={'submit'}
                            variant={'contained'}
                            color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}

// types
