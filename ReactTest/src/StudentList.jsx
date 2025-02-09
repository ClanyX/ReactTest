import { Container, Grid } from "@mui/system";
import SkibidiCard from "./SkibidiCard";

const students = [
    {id: 1, name: 'Jan Novak', description: 'Milovnik programovani',avatar: 'https://thypix.com/wp-content/uploads/2021/11/sponge-bob-profile-picture-thypix-99-768x777.jpg',category: "Science"},
    {id: 1, name: 'Richard Smutny', description: 'Milovnik telocviku',avatar: 'https://bzmedia.cz/band/62/a7/8c94/14/1d/8cad/d4Ed8epCRXF4a-uvKWR7N3YSXueJfGaf.jpg',category: "Science"},
    {id: 1, name: 'David Vesely', description: 'Milovnik matiky',avatar: 'https://bzmedia.cz/fan/fb/49/c132/15/78/858c/-SQh_pMLH8lnlPECvQLDJ2uMDBFEKHqH.jpg',category: "Science"},
    {id: 1, name: 'Jiri Palenka', description: 'Milovnik hudby',avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUY33CRri5_p0ymN6LEaR7bAr2BZyNuQqiA&s',category: "Science"},
    {id: 1, name: 'Matyas Zezulka', description: 'Milovnik KFC',avatar: 'https://bzmedia.cz/fan/de/deiv29/gallery/profile.default/503069_p.jpg',category: "Science"},
]

function StudentList(){
    return(
        <Container sx={{marginTop: 4}}>
            <Grid container spacing={2}>
             {students.map((student) => (
                <Grid item xs={12} sm={6} md={4} key={student.id}> 
                    <SkibidiCard student={student}></SkibidiCard>
                </Grid>
             ))}
            </Grid>

        </Container>
    );
}

export default StudentList;
