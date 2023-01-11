import { useState } from "react"

export default function Form(){
    const[nom,setNom] = useState("")
    const[motDePasse,setPass] = useState("")
    const[dateDeNaissance,setDate] = useState("")
    const[ville,setville] = useState("")
    const[genre,setgenre] = useState("")

    const handleOnSubmit=(e)=>{ 
        e.preventDefault()
        alert(` Votre nom est : ${nom} et le mot de passe : ${motDePasse} date de naissance : ${dateDeNaissance} la ville : ${ville} et enfin le genre :  ${genre}`)
    }

    return(
        <form onSubmit={(e)=>handleOnSubmit(e)} style={{textAlign:'center'}}>
            <p>
                <label >Nom : </label>
                <input type="text" name="Nom" onChange={(e)=>setNom(e.target.value)}  />
            </p>
            <p>
                <label >motDePasse : </label>
                <input type="password" name="motDePasse" onChange={(e)=>setPass(e.target.value)}/>
            </p>
            <p>
                <label >dateDeNaissance : </label>
                <input type="date" name="dateDeNaissance" onChange={(e)=>setDate(e.target.value)}/>
            </p>
            <p>
                <label >Ville : </label>
                <select name="ville" onChange={(e)=>setville(e.target.value)}>
                    <option >Sélectionner votre ville</option>
                    <option value="Agadir" >Agadir</option>
                    <option value="Bouizakarne">Bouizakarne</option>
                </select>
            </p>
            <p>
                <label >Genre : </label>
                <input type="radio" name="genre" value="Femme" onChange={(e)=>setgenre(e.target.value)}/> Femme
                <input type="radio" name="genre" value="Homme" onChange={(e)=>setgenre(e.target.value)} /> Homme
            </p>
            <p>
                <label >Loisirs : </label>
                <input type="checkbox" name="Loisirs"  />Sport
                <input type="checkbox" name="Loisirs"  />Lecture
                <input type="checkbox" name="Loisirs"  />Musique
            </p>
            <p>        
                <input  type="submit" name="submit" value='Valider' />
            </p>


        </form>
    )
}