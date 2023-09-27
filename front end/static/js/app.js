let resultResolutionCheck = document.getElementById('result-resolution-check')

if (resultResolutionCheck)
{
    let viewportWidthIsValid = () => window.innerWidth >= 360 && window.innerWidth <= 450
    
    const updateResolutionCheck = () => {   
        let isValid = viewportWidthIsValid()
        let text = isValid ? 'Resolução válida' : 'Resolução inválida'
    
        resultResolutionCheck.innerText = text.concat(': ', window.innerWidth, 'px')
        resultResolutionCheck.classList.remove(isValid ? 'text-danger' : 'text-success')
        resultResolutionCheck.classList.add(isValid ? 'text-success' : 'text-danger')
    }
    
    window.addEventListener('load', updateResolutionCheck)
    window.addEventListener('resize', updateResolutionCheck)
}


const btnsFavorite = document.querySelectorAll('.favorite-btn i')

btnsFavorite.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.classList.remove('bi-heart')
        btn.classList.add('bi-heart-fill')
    })
    
    btn.addEventListener('mouseout', () => {
        if (!btn.hasAttribute('checked'))
        {
            btn.classList.remove('bi-heart-fill')
            btn.classList.add('bi-heart')
        }
    })
    
    btn.addEventListener('click', () => {
        if (!btn.hasAttribute('checked'))
        {
            btn.setAttribute('checked', '')
            btn.classList.remove('bi-heart')
            btn.classList.add('bi-heart-fill')
        }
        else
        {
            btn.removeAttribute('checked')
            btn.classList.remove('bi-heart-fill')
            btn.classList.add('bi-heart')
        }
    })
})

const btnImgSm = document.querySelectorAll('.car-photos button')
const imgLg = document.querySelector('#img-lg img')

btnImgSm.forEach(btn => {
    btn.addEventListener('click', () => {
        const imgSm = btn.querySelector('img')

        imgLg.src = imgSm.src
    })
})

const recipientMsg = document.querySelector('.recipient-msg');

if (recipientMsg)
{
    setTimeout(() => {
        recipientMsg.innerHTML = 'Estou indo embora, não faz sentido ficar contigo. Melhor assim e é nessa hora que o homem chora, a dor é forte demais pra mim';
    }, 2500)
}

const chatPage = document.querySelector('.chat-page');

if (chatPage)
{
    setTimeout(() => {
        window.location.assign('./vehicle_delivered.html')
    }, 5000);
}

const vehicleDeliveredPage = document.querySelector('.vehicle-delivered-page');

if (vehicleDeliveredPage)
{
    setTimeout(() => {
        window.location.assign('./checkout.html')
    }, 5000);
}

const primaryCheck =  document.querySelector('.primary-check input')
const secondaryCheck =  document.querySelector('.secondary-check')

if (primaryCheck)
{
    primaryCheck.addEventListener('input', e => {
        if (e.target.checked)
            secondaryCheck.style.display = 'flex'
        else
            secondaryCheck.style.display = 'none'
    })
}

const photoInput = document.getElementById('fotos')
const photoFeedback = document.getElementById('photo-feedback')

photoInput.addEventListener('input', e => {
    if (e.target.files.length)
    {
        const checkFile = file => {
            if (
                (file.type !== 'image/jpeg' &&
                file.type !== 'image/png')
                ||
                file.size > 500000
            )
                return false;

            return true;
        }

        let allPhotosAreValid = true;

        for (file of e.target.files)
            if (!checkFile(file))
            {
                allPhotosAreValid = false
                break
            }

        if (allPhotosAreValid)
        {
            photoFeedback.innerText = 'Fotos carregadas com sucesso'
            photoFeedback.classList.remove('text-danger')
            photoFeedback.classList.add('text-success')
        }
        else
        {
            photoFeedback.innerText = 'Fotos com erros'
            photoFeedback.classList.remove('text-success')
            photoFeedback.classList.add('text-danger')
        }
    }
});