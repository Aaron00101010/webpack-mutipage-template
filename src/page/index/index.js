import '@/style/common/common'
import '@/style/page/index/index'
import { formatMoney } from '@/script/util/format'

$(document.body).append($(`<h1>${formatMoney(66666666666666.23)}</h1>`))

$('img').animate({ 'margin-left': '50px' }, 2000)
