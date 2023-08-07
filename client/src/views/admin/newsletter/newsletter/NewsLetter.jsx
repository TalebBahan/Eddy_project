import React from 'react';
import Table from './Table';
import { useGetnewslettersQuery } from './newsletterApi';
import Loading from 'components/Loading';
import Unauthorized from 'components/Unauthorized';
import Card from 'components/card';
import { useGetCheckBoxesQuery } from './newsletterApi';
import View from './View';
import Navbar from 'components/navbar';
export default function NewsLetter() {
    const { data, isLoading, isError } = useGetnewslettersQuery();
    const {
        data: moreData,
        isLoading: moreIsLoading,
        isError: moreIsError
    } = useGetCheckBoxesQuery();
    const [open, setOpen] = React.useState(false);
    const [newsletter, setNewsletter] = React.useState({});
    const [redirect, setRedirect] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    const [checkedArticles, setCheckedArticles] = React.useState([]);
    const [checkedBooks, setCheckedBooks] = React.useState([]);
    const [checkedMedia, setCheckedMedia] = React.useState([]);

    if (isLoading) {
        return <Loading />;
    }


    if (isError) {
        return <Unauthorized />;
    }

    const handleCheckboxChange = (e, id, type) => {
        const isChecked = e.target.checked;

        if (type === 'articles') {
            if (isChecked) {
                setCheckedArticles([...checkedArticles, id]);
            } else {
                setCheckedArticles(checkedArticles.filter(item => item !== id));
            }
        } else if (type === 'books') {
            if (isChecked) {
                setCheckedBooks([...checkedBooks, id]);
            } else {
                setCheckedBooks(checkedBooks.filter(item => item !== id));
            }
        } else if (type === 'media') {
            if (isChecked) {
                setCheckedMedia([...checkedMedia, id]);
            } else {
                setCheckedMedia(checkedMedia.filter(item => item !== id));
            }
        }
    };

    
  
    
    const handlePreviewClick = () => {
      setNewsletter({
        articlesIds: checkedArticles,
        booksIds: checkedBooks,
        mediasIds: checkedMedia,
        title: data[0].title,
        subject: data[0].subject,
        body: data[0].body,
      });
      setRedirect(true);
    };
  
    // Rest of the code...
  
    if (redirect) {
      return <View newsletter={newsletter} handleBack={()=>setRedirect(false)} />;
    }

    return (
        // <Router>
            <div className="mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid">
                <Navbar />
                    

                <Card extra="w-full h-full p-4 sm:overflow-x-auto">
                    <div className="relative flex items-center justify-between">
                        <div className="text-xl font-bold text-navy-700 dark:text-white">
                            NewsLetter
                        </div>
                        <button
                            onClick={handlePreviewClick}
                            className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}
                        >
                            preview && Send
                        </button>
                    </div>
                    <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
                        <Table {...data[0]} />
                    </div>
                    {moreData && (
                        <div className="mt-4 h-full grid grid-cols-2 gap-4">
                            <div className="text-sm font-bold text-navy-700 dark:text-white">
                                Articles
                                {moreData.articlesIdTitle.map(item => (
                                    <label key={item._id} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            onChange={e =>
                                                handleCheckboxChange(e, item._id, 'articles')
                                            }
                                            checked={checkedArticles.includes(item._id)}
                                        />
                                        {item.title}
                                    </label>
                                ))}
                            </div>
                            <div className="text-sm font-bold text-navy-700 dark:text-white">
                                Books
                                {moreData.booksIdTitle.map(item => (
                                    <label key={item._id} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            onChange={e => handleCheckboxChange(e, item._id, 'books')}
                                            checked={checkedBooks.includes(item._id)}
                                        />
                                        {item.title}
                                    </label>
                                ))}
                            </div>
                            <div className="text-sm font-bold text-navy-700 dark:text-white">
                                Media Coverage
                                {moreData.mediaIdTitle.map(item => (
                                    <label key={item._id} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            onChange={e =>
                                                handleCheckboxChange(e, item._id, 'media')
                                            }
                                            checked={checkedMedia.includes(item._id)}
                                        />
                                        {item.title}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        // </Router>
    );
}
