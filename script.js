const fulldarkmode = document.querySelector('#full-dark-mode')
const containdarkmode = document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container')

fulldarkmode.addEventListener('change', () => {
    if(fulldarkmode.checked)
    {
        document.body.classList.add('dark')
    }
    else
    {
        document.body.classList.remove('dark')
    }
    containdarkmode.checked = fulldarkmode.checked
    containeddarkmode()
})

function containeddarkmode()
{
    if(containdarkmode.checked)
        {
            container.classList.add('dark')
        }
        else
        {
            container.classList.remove('dark')
        }
}
containdarkmode.addEventListener('change', containeddarkmode)