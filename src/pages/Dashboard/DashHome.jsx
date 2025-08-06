import React from 'react'
import { MdPeople, MdAssessment, MdMessage, MdShoppingCart } from 'react-icons/md'
import { FaDollarSign, FaChartLine } from 'react-icons/fa'

const DashHome = () => {
    const stats = [
        {
            title: 'Users',
            value: '1,250',
            icon: <MdPeople className="h-8 w-8 text-violet-600" />,
            desc: 'Active this month'
        },
        {
            title: 'Revenue',
            value: '$12,500',
            icon: <FaDollarSign className="h-8 w-8 text-green-600" />,
            desc: 'Total earnings'
        },
        {
            title: 'Sales',
            value: '320',
            icon: <MdShoppingCart className="h-8 w-8 text-orange-500" />,
            desc: 'Orders completed'
        },
        {
            title: 'Reports',
            value: '45',
            icon: <MdAssessment className="h-8 w-8 text-blue-600" />,
            desc: 'Pending reviews'
        },
        {
            title: 'Messages',
            value: '87',
            icon: <MdMessage className="h-8 w-8 text-pink-500" />,
            desc: 'Unread messages'
        },
        {
            title: 'Growth',
            value: '+12%',
            icon: <FaChartLine className="h-8 w-8 text-emerald-600" />,
            desc: 'Monthly increase'
        },
    ]

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex items-center p-5 border border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition cursor-pointer"
                    >
                        <div className="p-3 bg-gray-100 rounded-full">
                            {stat.icon}
                        </div>
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold text-gray-700">{stat.title}</h2>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            <p className="text-sm text-gray-500">{stat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, quod corporis iusto error obcaecati molestias rerum totam officia temporibus recusandae quasi atque nihil accusamus libero dolorem, ea ex culpa porro.
                Fuga dolorem, deleniti ea vitae saepe voluptates nesciunt officia hic aperiam alias officiis. Accusantium eius dolorem delectus, dicta, facere ea, ab nobis eligendi doloremque rem sequi vitae tenetur eos exercitationem!
                Pariatur, repudiandae voluptates. Voluptatibus perspiciatis vitae asperiores blanditiis, quas nesciunt unde ad sequi doloremque eum magni dignissimos mollitia harum tenetur eaque beatae, numquam fugit laborum tempora praesentium autem aliquid sapiente.
                In quo omnis et eaque modi libero nesciunt ab. Modi, hic sint veritatis voluptatibus ullam autem, deleniti accusantium similique consectetur voluptate tempore. Rem quo sequi corporis, labore nemo inventore dicta.
                Dicta, optio consectetur laborum, temporibus qui assumenda, corrupti quo hic sint minus id eligendi sunt. Commodi in sint modi, aut debitis molestiae natus nulla sapiente architecto corrupti ab autem dolor.
                Ab temporibus dolorum, repudiandae, ullam mollitia exercitationem aliquid dicta impedit explicabo voluptatum aspernatur? Sint repudiandae numquam excepturi ab corporis perspiciatis odio nobis quo illum eos similique, quibusdam nesciunt laudantium in.
                Ipsa error quod unde hic vero accusantium, eum est facilis nostrum dignissimos eveniet mollitia sit eius aspernatur perspiciatis expedita aut dicta, quaerat cum, alias eos laborum sapiente. Dignissimos, accusantium dolor.
                At quidem ex totam, cumque et cupiditate molestiae. Magni, blanditiis possimus pariatur omnis tempore ea quia quae molestiae, aliquam doloremque cupiditate. Non repellendus sapiente, impedit fugiat omnis nobis voluptatum perspiciatis!
                In aspernatur tempore ducimus porro quae provident illo asperiores voluptatem, magni, laudantium unde perferendis quidem culpa beatae natus explicabo nihil quia aperiam voluptatum inventore doloremque rerum, assumenda suscipit. Hic, corrupti.
                Molestiae, mollitia cupiditate aspernatur dolor ipsa suscipit quia numquam amet error. At, quas temporibus. Eaque quaerat iusto ducimus quae harum libero eveniet, natus est quidem odit hic placeat iure dolorum.
                Sapiente pariatur voluptatibus eius, earum possimus itaque aliquid quae quia magni voluptate corrupti tempore quidem vel porro ducimus nemo quibusdam enim, laudantium dolore veniam error fugit doloribus aut? Facere, dolores!
                Soluta provident maxime odio, nostrum natus mollitia voluptatem distinctio non voluptates nobis quaerat ipsa quidem nesciunt incidunt. Delectus atque obcaecati asperiores beatae nesciunt eos, natus, debitis officia quidem quam animi?
                Perferendis aut atque soluta tempore porro doloremque nobis error qui laudantium maxime ut nulla placeat odit, sunt aspernatur explicabo voluptas et quisquam nisi vel ducimus repellendus veritatis! Optio, laudantium libero!
                Ipsa minus voluptatem eligendi possimus sed incidunt rem nemo architecto laudantium fuga, nisi expedita? Dolorem quisquam animi impedit facilis voluptatem fugit, aspernatur expedita beatae aliquid ipsa neque ea odit dicta.
                Voluptas hic aperiam veniam reiciendis assumenda corrupti expedita, alias cumque tempora optio rem sed amet praesentium sint reprehenderit exercitationem magnam, aliquid soluta nostrum repellat et? Doloremque ab commodi dolor voluptas!
                Architecto sunt sint ab facere amet minus nobis? Et explicabo eum molestias inventore sunt, expedita aspernatur ipsa saepe, quidem, numquam repellat fugiat ducimus omnis quas illum laboriosam laborum distinctio repellendus.
                Repellendus labore magni iure sint, vero rem repudiandae perspiciatis beatae asperiores quia officiis quos! Nesciunt molestiae incidunt necessitatibus, velit nam tempora eligendi cupiditate expedita rem iure facilis amet harum ab?
                Nesciunt laudantium sed aperiam itaque dolorem quidem ab excepturi magnam officiis omnis, temporibus aliquam earum facilis beatae nemo, placeat natus vel iusto dicta eius voluptates fugit. Non ad maxime alias!
                Accusamus architecto itaque, tempora, voluptates nihil quis ipsam expedita iusto vel culpa rerum ad hic! Optio minima, magni dolorem provident sit corrupti enim numquam aliquid autem porro magnam eius voluptate!
                Inventore tempore dicta maxime deleniti expedita perspiciatis consequatur veritatis quaerat ut rerum mollitia eos fugiat voluptas, est maiores aliquam neque? Non obcaecati ut veritatis magni, explicabo iste libero nesciunt autem!
            </div>
        </div>
    )
}

export default DashHome
