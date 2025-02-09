import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

function SkibidiCard({student}){
    const handleLearnMore= () =>{
        alert(`More info about ${student.name}`);
    }

    return (
        <Card>
            <CardHeader title={student.name} />
            <CardMedia component="img" 
            height="140"
            image={student.avatar}
            alt={student.name}
            />

        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {student.description}
            </Typography>
            
        </CardContent>
        <CardActions>
            <Button size="small" onClick={handleLearnMore}>
                Learn More
            </Button>
        </CardActions>
            
        </Card>
    );
}

export default SkibidiCard;