export function getOrderStatus(status) {
    switch (status) {
        case '0':
            return <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">Active</span>
        case '0':
            return <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">Active</span>
        case '1':
            return <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">Deliverd</span>
        case '1':
            return <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">Deliverd</span>
        case '1':
            return <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">Deliverd</span>
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
    }
}
