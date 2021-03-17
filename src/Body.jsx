import React from 'react';
import { NavLink } from 'react-router-dom';

const Body = () => {
        return(
            <>
            <div className="container">
                <div className="row border border-dark m-auto">
                    <div className="col-4 bg-light border boder-dark pt-3">
                    <p>
                        <NavLink className="btn btn-white dropdown-toggle" data-bs-toggle="collapse" to="#search" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Search
                        </NavLink>
                    </p>
                    <div className="collapse" id="search">
                        <div className="card card-body">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Quran</button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Roots</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">GoTo</button>
                                </li>
                            </ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><input type="text" name="search" className="form-control" placeholder="Search" /><br />
   <button className="btn btn-primary">Search</button>   <NavLink to="#">Tips</NavLink></div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
                        </div>
                    </div>
                    <hr />
                    <p>
                        <NavLink className="btn btn-white dropdown-toggle" data-bs-toggle="collapse" to="#browse" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Browse
                        </NavLink>
                    </p>
                    <div className="collapse" id="browse">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                    <hr />
                    <p>
                        <NavLink className="btn btn-white dropdown-toggle" data-bs-toggle="collapse" to="#recitation" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Recitation
                        </NavLink>
                    </p>
                    <div className="collapse" id="recitation">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                    <hr />
                    <p>
                        <NavLink className="btn btn-white dropdown-toggle" data-bs-toggle="collapse" to="#translation" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Translation
                        </NavLink>
                    </p>
                    <div className="collapse" id="translation">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                    <hr />
                    <p>
                        <NavLink className="btn btn-white dropdown-toggle" data-bs-toggle="collapse" to="#quran" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Quran
                        </NavLink>
                    </p>
                    <div className="collapse" id="quran">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                    <hr />
                    <p>
                        <NavLink className="btn btn-white dropdown-toggle" data-bs-toggle="collapse" to="#displayoption" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Display Options
                        </NavLink>
                    </p>
                    <div className="collapse" id="displayoption">
                        <div className="card card-body">
                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-8 border border-dark">
                        <div className="">
                        <nav className="" aria-label="Page navigation example">
  <ul className="pagination mt-2 justify-content-center">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><NavLink className="page-link" to="#">1</NavLink></li>
   
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
            <div className="float-start">
                <h5 >سورة الكهف</h5>
                </div>
                <div className="float-end">
                <h5 >الجزء الخامس عشر</h5>
                </div>
                <div className="mt-5 mb-3 me-2 ms-2 px-3 py-3 border border-dark" id="mybg">
                <p id="arabic" className="">
                الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا ۖ وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًا وَخَيْرٌ أَمَلًا ﴿٤٦﴾ وَيَوْمَ نُسَيِّرُ الْجِبَالَ وَتَرَى الْأَرْضَ بَارِزَةً وَحَشَرْنَاهُمْ فَلَمْ نُغَادِرْ مِنْهُمْ أَحَدًا ﴿٤٧﴾ وَعُرِضُوا عَلَىٰ رَبِّكَ صَفًّا لَّقَدْ جِئْتُمُونَا كَمَا خَلَقْنَاكُمْ أَوَّلَ مَرَّةٍ ۚ بَلْ زَعَمْتُمْ أَلَّن نَّجْعَلَ لَكُم مَّوْعِدًا ﴿٤٨﴾ وَوُضِعَ الْكِتَابُ فَتَرَى الْمُجْرِمِينَ مُشْفِقِينَ مِمَّا فِيهِ وَيَقُولُونَ يَا وَيْلَتَنَا مَالِ هَـٰذَا الْكِتَابِ لَا يُغَادِرُ صَغِيرَةً وَلَا كَبِيرَةً إِلَّا أَحْصَاهَا ۚ وَوَجَدُوا مَا عَمِلُوا حَاضِرًا ۗ وَلَا يَظْلِمُ رَبُّكَ أَحَدًا ﴿٤٩﴾ وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ كَانَ مِنَ الْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِ ۗ أَفَتَتَّخِذُونَهُ وَذُرِّيَّتَهُ أَوْلِيَاءَ مِن دُونِي وَهُمْ لَكُمْ عَدُوٌّ ۚ بِئْسَ لِلظَّالِمِينَ بَدَلًا ﴿٥٠﴾ ۞ مَّا أَشْهَدتُّهُمْ خَلْقَ السَّمَاوَاتِ وَالْأَرْضِ وَلَا خَلْقَ أَنفُسِهِمْ وَمَا كُنتُ مُتَّخِذَ الْمُضِلِّينَ عَضُدًا ﴿٥١﴾ وَيَوْمَ يَقُولُ نَادُوا شُرَكَائِيَ الَّذِينَ زَعَمْتُمْ فَدَعَوْهُمْ فَلَمْ يَسْتَجِيبُوا لَهُمْ وَجَعَلْنَا بَيْنَهُم مَّوْبِقًا ﴿٥٢﴾ وَرَأَى الْمُجْرِمُونَ النَّارَ فَظَنُّوا أَنَّهُم مُّوَاقِعُوهَا وَلَمْ يَجِدُوا عَنْهَا مَصْرِفًا ﴿٥٣﴾
                </p>
                </div>
            




                        </div>
                    </div>
                </div>
            </div>
            </>
        );
};

export default Body;


