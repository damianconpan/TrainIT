const form = document.getElementById('form')
const ul = document.getElementById('usuarios')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const nombre = form.nombre.value.trim()
    const email = form.email.value.trim()
    const password = form.password.value.trim()

    try {
        const res = await fetch('/api/users/register', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({ nombre, email, password })
        })
        const data = await res.json()
        if (res.ok) {
            alert('Usuario registrado')
            form.reset()
            loadUsers()
        } else {
            alert(data.message)
        }
    } catch (err) {
        console.error(err)
    }
})

async function loadUsers(){
    ul.innerHTML = ''
    const res = await fetch('/api/users/list')
    const users = await res.json()
    users.forEach(user => {
        const li = document.createElement('li')
        li.textContent = `${user.nombre} - ${user.email}`
        ul.prepend(li)
    })
}

loadUsers()
