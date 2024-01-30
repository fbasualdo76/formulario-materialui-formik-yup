import "./formulario.css";
import { Grid, TextField, Typography, Button } from '@mui/material';
import { useFormik } from "formik";
import * as Yup from "yup";
const Formulario = () => {
    const { handleSubmit, handleChange, values, setFieldValue, errors } =
        useFormik({
            initialValues: {
                nombre: "",
                email: "",
                contraseña: "",
            },
            onSubmit: (data) => {
                console.log(data);
            },
            validationSchema:Yup.object({
                nombre:Yup.string().required("Debes ingresar un nombre"),
                email:Yup.string().required("Debes ingresar un e-mail"),
                contraseña:Yup.string().required("Debes ingresar un contraseña")
            }),
        });
    return (
        <>
            <Typography color="primary" variant="h2" align="center">Registro.</Typography>
            <form className="contenedor-formulario" onSubmit={handleSubmit}>
                <Grid container
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    spacing={2}
                    /*sx={{ with: "100%" }}*/>
                    <Grid item xs={12} sm={9} md={7} lg={7}>
                        <TextField
                            type="text"
                            label="Ingrese su nombre"
                            variant="outlined"
                            fullWidth
                            //si utilizo setFieldValue ya no necesito usar el name.
                            //name="nombre"
                            //otra forma de manejar el OnChange es con el setFieldValue, se utiliza por ejemplo para los checkbox.
                            onChange={(e) => {
                                setFieldValue("nombre", e.target.value)
                            }}                            
                            value={values.nombre}
                            error={!!errors.nombre}
                            helperText={errors.nombre}/>
                    </Grid>
                    <Grid item xs={12} sm={9} md={7} lg={7}>
                        <TextField
                            type="email"
                            label="Ingrese su e-mail"
                            variant="outlined"
                            fullWidth
                            name="email"
                            onChange={handleChange}
                            value={values.email} 
                            error={!!errors.email}
                            helperText={errors.email}/>
                    </Grid>
                    <Grid item xs={12} sm={9} md={7} lg={7}>
                        <TextField
                            type="password"
                            label="Ingrese su contraseña"
                            variant="outlined"
                            fullWidth
                            name="contraseña"
                            onChange={handleChange}
                            value={values.contraseña} 
                            error={!!errors.contraseña}
                            helperText={errors.contraseña}/>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained">Enviar</Button>
            </form>
        </>
    )
}
export default Formulario