import '@/style/common/common'
import '@/style/page/list/list'
import { formatMoney } from '@/script/util/format'

$(document.body).css('transform', 'rotate(45deg)')
$(document.body).append($(`<h1>${formatMoney(66666666666666.23)}</h1>`))
