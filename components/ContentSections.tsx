import ContentSection from './ContentSection'

const ContentSections = () => {
  const sections = [
    {
      title: 'Зараз на ТВ',
      items: [
        { title: 'Програма 1', type: 'live', image: '/images/placeholder.jpg' },
        { title: 'Програма 2', type: 'live', image: '/images/placeholder.jpg' },
        { title: 'Програма 3', type: 'live', image: '/images/placeholder.jpg' },
        { title: 'Програма 4', type: 'live', image: '/images/placeholder.jpg' },
        { title: 'Програма 5', type: 'live', image: '/images/placeholder.jpg' },
        { title: 'Програма 6', type: 'live', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'Зараз у трендах',
      items: [
        { title: 'Американська фікція', type: 'movie', rating: '8.2', image: '/images/placeholder.jpg' },
        { title: 'Смак кохання', type: 'series', rating: '7.8', image: '/images/placeholder.jpg' },
        { title: 'Наполеон', type: 'movie', rating: '7.5', image: '/images/placeholder.jpg' },
        { title: 'Серіал 4', type: 'series', rating: '8.0', image: '/images/placeholder.jpg' },
        { title: 'Фільм 5', type: 'movie', rating: '7.9', image: '/images/placeholder.jpg' },
        { title: 'Серіал 6', type: 'series', rating: '8.1', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'Рекомендації з історії та переглядів',
      items: [
        { title: 'Рекомендація 1', type: 'movie', rating: '8.5', image: '/images/placeholder.jpg' },
        { title: 'Рекомендація 2', type: 'series', rating: '7.7', image: '/images/placeholder.jpg' },
        { title: 'Рекомендація 3', type: 'movie', rating: '8.0', image: '/images/placeholder.jpg' },
        { title: 'Рекомендація 4', type: 'series', rating: '7.9', image: '/images/placeholder.jpg' },
        { title: 'Рекомендація 5', type: 'movie', rating: '8.2', image: '/images/placeholder.jpg' },
        { title: 'Рекомендація 6', type: 'series', rating: '7.6', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'Прем\'єри',
      items: [
        { title: 'Нова прем\'єра 1', type: 'movie', rating: '8.3', image: '/images/placeholder.jpg' },
        { title: 'Нова прем\'єра 2', type: 'series', rating: '7.8', image: '/images/placeholder.jpg' },
        { title: 'Нова прем\'єра 3', type: 'movie', rating: '8.1', image: '/images/placeholder.jpg' },
        { title: 'Нова прем\'єра 4', type: 'series', rating: '7.9', image: '/images/placeholder.jpg' },
        { title: 'Нова прем\'єра 5', type: 'movie', rating: '8.0', image: '/images/placeholder.jpg' },
        { title: 'Нова прем\'єра 6', type: 'series', rating: '7.7', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'У жанрових добірках',
      items: [
        { title: 'Бойовик 1', type: 'movie', rating: '8.1', image: '/images/placeholder.jpg' },
        { title: 'Комедія 1', type: 'movie', rating: '7.9', image: '/images/placeholder.jpg' },
        { title: 'Драма 1', type: 'series', rating: '8.3', image: '/images/placeholder.jpg' },
        { title: 'Трилер 1', type: 'movie', rating: '8.0', image: '/images/placeholder.jpg' },
        { title: 'Фантастика 1', type: 'series', rating: '7.8', image: '/images/placeholder.jpg' },
        { title: 'Жахи 1', type: 'movie', rating: '7.5', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'Топ тижня MEGOGO',
      items: [
        { title: 'Топ фільм 1', type: 'movie', rating: '8.7', image: '/images/placeholder.jpg' },
        { title: 'Топ серіал 1', type: 'series', rating: '8.5', image: '/images/placeholder.jpg' },
        { title: 'Топ фільм 2', type: 'movie', rating: '8.4', image: '/images/placeholder.jpg' },
        { title: 'Топ серіал 2', type: 'series', rating: '8.3', image: '/images/placeholder.jpg' },
        { title: 'Топ фільм 3', type: 'movie', rating: '8.2', image: '/images/placeholder.jpg' },
        { title: 'Топ серіал 3', type: 'series', rating: '8.1', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'Топи світових Netflix',
      items: [
        { title: 'Netflix хіт 1', type: 'series', rating: '8.6', image: '/images/placeholder.jpg' },
        { title: 'Netflix хіт 2', type: 'movie', rating: '8.4', image: '/images/placeholder.jpg' },
        { title: 'Netflix хіт 3', type: 'series', rating: '8.3', image: '/images/placeholder.jpg' },
        { title: 'Netflix хіт 4', type: 'movie', rating: '8.2', image: '/images/placeholder.jpg' },
        { title: 'Netflix хіт 5', type: 'series', rating: '8.1', image: '/images/placeholder.jpg' },
        { title: 'Netflix хіт 6', type: 'movie', rating: '8.0', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'Серіали в українському дубляжі',
      items: [
        { title: 'Український дубляж 1', type: 'series', rating: '8.2', image: '/images/placeholder.jpg' },
        { title: 'Український дубляж 2', type: 'series', rating: '8.0', image: '/images/placeholder.jpg' },
        { title: 'Український дубляж 3', type: 'series', rating: '7.9', image: '/images/placeholder.jpg' },
        { title: 'Український дубляж 4', type: 'series', rating: '7.8', image: '/images/placeholder.jpg' },
        { title: 'Український дубляж 5', type: 'series', rating: '7.7', image: '/images/placeholder.jpg' },
        { title: 'Український дубляж 6', type: 'series', rating: '7.6', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'Що дивити дорослим',
      items: [
        { title: 'Дорослий контент 1', type: 'movie', rating: '8.3', image: '/images/placeholder.jpg' },
        { title: 'Дорослий контент 2', type: 'series', rating: '8.1', image: '/images/placeholder.jpg' },
        { title: 'Дорослий контент 3', type: 'movie', rating: '8.0', image: '/images/placeholder.jpg' },
        { title: 'Дорослий контент 4', type: 'series', rating: '7.9', image: '/images/placeholder.jpg' },
        { title: 'Дорослий контент 5', type: 'movie', rating: '7.8', image: '/images/placeholder.jpg' },
        { title: 'Дорослий контент 6', type: 'series', rating: '7.7', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'Серіали HBO',
      items: [
        { title: 'HBO серіал 1', type: 'series', rating: '8.8', image: '/images/placeholder.jpg' },
        { title: 'HBO серіал 2', type: 'series', rating: '8.6', image: '/images/placeholder.jpg' },
        { title: 'HBO серіал 3', type: 'series', rating: '8.5', image: '/images/placeholder.jpg' },
        { title: 'HBO серіал 4', type: 'series', rating: '8.4', image: '/images/placeholder.jpg' },
        { title: 'HBO серіал 5', type: 'series', rating: '8.3', image: '/images/placeholder.jpg' },
        { title: 'HBO серіал 6', type: 'series', rating: '8.2', image: '/images/placeholder.jpg' },
      ]
    },
    {
      title: 'Популярні фільми українською мовою',
      items: [
        { title: 'Український фільм 1', type: 'movie', rating: '8.1', image: '/images/placeholder.jpg' },
        { title: 'Український фільм 2', type: 'movie', rating: '8.0', image: '/images/placeholder.jpg' },
        { title: 'Український фільм 3', type: 'movie', rating: '7.9', image: '/images/placeholder.jpg' },
        { title: 'Український фільм 4', type: 'movie', rating: '7.8', image: '/images/placeholder.jpg' },
        { title: 'Український фільм 5', type: 'movie', rating: '7.7', image: '/images/placeholder.jpg' },
        { title: 'Український фільм 6', type: 'movie', rating: '7.6', image: '/images/placeholder.jpg' },
      ]
    }
  ]

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </div>
  )
}

export default ContentSections