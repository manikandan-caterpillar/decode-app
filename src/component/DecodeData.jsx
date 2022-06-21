import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { validationSchema } from './validationSchema';
import base64 from 'base-64';

export const DecodeData = () => {
    const [decodeResult, setDecodeResult] = useState(null);
    const [error, setError] = useState(null);
    const formik = useFormik({
        initialValues: {
            encodeData: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const { encodeData } = values;
            const data = base64.decode(encodeData);
            try {
                const encodeJSON = JSON.parse(data);
                if (typeof (encodeJSON) === 'object') {
                    setDecodeResult(JSON.stringify(encodeJSON, null, 2));
                    setError(null);
                }
            } catch (error) {
                setDecodeResult(null);
                setError("Please check your endcode data");
            }
        },
    });

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Base64 Data Handled
                </Typography>

                <form noValidate onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="encodeData"
                        name="encodeData"
                        label="Encode Data"
                        value={formik.values.encodeData}
                        onChange={formik.handleChange}
                        error={formik.touched.encodeData && Boolean(formik.errors.encodeData)}
                        helperText={formik.touched.encodeData && formik.errors.encodeData}
                    />
                    <br /><br />
                    <Stack direction="row" spacing={2}>
                        <Button color="warning" variant="contained" type="submit" align="right">
                            Reset
                        </Button>
                        <Button color="primary" variant="contained" type="submit">
                            Decode
                        </Button>
                    </Stack>
                </form>
                {decodeResult &&
                    <>
                        <br />
                        <b>Decode Result</b>: <br />
                        <pre><code>{decodeResult}</code></pre>
                    </>
                }
                {error &&
                    <>
                        <br />
                        <b>Error</b>: {error}
                    </>
                }
            </Box>


        </Container>
    );
};
