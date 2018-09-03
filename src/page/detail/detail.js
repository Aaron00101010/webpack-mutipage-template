import '@/style/common/common'
import { formatMoney } from '@/script/util/format'

$(document.body).append($(`<h1>${formatMoney(66666666666666.23)}</h1>`))
