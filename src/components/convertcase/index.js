import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { InputAdornment } from '@mui/material';
import { SearchOutlined } from '@ant-design/icons';
import { useForm, Controller } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import { validationSchema } from './validationSchema';
import base64 from 'base-64';

export const ConvertCase = () => {
    const [decodeResult, setDecodeResult] = useState(null);
    const [error, setError] = useState(null);
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            encodeData: '',
        },
        shouldFocusError: true,
        shouldUnregister: true,
        shouldUseNativeValidation: false,
        resolver: joiResolver(validationSchema),
    });
    console.log(errors);

    const onSubmit = (values) => {
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
    };

    return (
        <Container maxWidth="100%">
            <Box sx={{ m: 1 }}>
                <Typography variant="h5" component="h5">
                    Simply enter your text and choose the case you want to convert it to.
                </Typography>
                <form noValidate onSubmit={handleSubmit((data) => onSubmit(data))}>

                    <Controller
                        name="encodeData"
                        control={control}
                        render={({ field }) =>
                            <TextField
                                {...field}
                                fullWidth
                                multiline
                                rows={5}
                                error={errors.encodeData?.message}
                                helperText={errors.encodeData?.message}
                                size="small"
                                id="encodeData"
                                autoComplete={"off"}
                                placeholder="Type or paste your content here"
                            />
                        }
                    />
                    <br /><br />
                    <Stack direction="row" spacing={2}>
                        <Button color="warning" variant="contained" type="button" onClick={() => reset({ encodeData: "" })} align="right">
                            Reset
                        </Button>
                        <Button color="primary" variant="contained" type="submit">
                            Decode
                        </Button>
                    </Stack>
                </form>
                <br />
                <br />
                <TextField
                    fullWidth
                    multiline
                    rows={5}
                    error={errors.encodeData?.message}
                    helperText={errors.encodeData?.message}
                    size="small"
                    autoComplete={"off"}
                    placeholder="Result"
                    inputProps={
                        { readOnly: true, }
                    }
                />
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
