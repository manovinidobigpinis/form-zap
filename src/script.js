function mensagem(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const numero = document.getElementById('numero').value

    const mensagem = `---DADOS---\nNome:${nome}\nEmail:${email}\nNúmero:${numero}`
    const msg = encodeURIComponent(mensagem)
    console.log(msg)
    window.open(`https://wa.me/55ddd*********?text=${msg}`)
}