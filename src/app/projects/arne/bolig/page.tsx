'use client'
import React, { useState, useEffect } from 'react';
import { TextField, Container, Grid } from '@mui/material';

const FinancialCalculator: React.FC = () => {
    const [salary, setSalary] = useState<number>(0);
    const [loanAmount, setLoanAmount] = useState<number>(0);
    const [downPayment, setDownPayment] = useState<number>(0);
    const [totalSum, setTotalSum] = useState<number>(0);
    const [bsuSavings, setBsuSavings] = useState<number>(0);
    const [bsuInterest, setBsuInterest] = useState<number>(0);
    const [monthlySavings, setMonthlySavings] = useState<number>(0);
    const [savingsInterest, setSavingsInterest] = useState<number>(0);

    useEffect(() => {
        const calculatedLoanAmount = salary * 5;
        setLoanAmount(calculatedLoanAmount);
        const calculatedDownPayment = calculatedLoanAmount * 0.15;
        setDownPayment(calculatedDownPayment);
        setTotalSum(calculatedLoanAmount + calculatedDownPayment);
    }, [salary]);

    return (
        <Container>
            <h1>HEI</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Lønn"
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(Number(e.target.value))}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Mulig lånemengde"
                        type="number"
                        value={loanAmount}
                        disabled
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Egenandel"
                        type="number"
                        value={downPayment}
                        disabled
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Totalsum"
                        type="number"
                        value={totalSum}
                        disabled
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Sparer i året BSU"
                        type="number"
                        value={bsuSavings}
                        onChange={(e) => setBsuSavings(Number(e.target.value))}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="BSU rente (%)"
                        type="number"
                        value={bsuInterest}
                        onChange={(e) => setBsuInterest(Number(e.target.value))}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Sparer i måneden Sparekonto"
                        type="number"
                        value={monthlySavings}
                        onChange={(e) => setMonthlySavings(Number(e.target.value))}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Sparekonto rente (%)"
                        type="number"
                        value={savingsInterest}
                        onChange={(e) => setSavingsInterest(Number(e.target.value))}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default FinancialCalculator;