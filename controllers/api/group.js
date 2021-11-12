const Group = require("../../models/group")
const User = require("../../models/users")

module.exports = {
    index,
    create,
    detail,
    yearDetail,
    updateOne,
  };

  async function index(req, res) {
    const groups = await Group.find({})
      .populate('user')
      .sort("createdAt")
      .exec();
    res.json(groups);
}

async function create(req, res) {
  try {
    // Find group with same name
    const findGroup = await Group.findOne({name: req.body.name})
    // If group name already exists
    if (findGroup) {
      console.log(`${findGroup.name} already exists`)
      // const newGroup = await Group.create(req.body);
      res.json(newGroup)
    } else {
      req.body.user = req.user._id;
      // req.user.groups = req.body
      const newGroup = await Group.create(req.body);
      req.user.groups = req.body
      console.log(req.user)
      // console.log(newGroup);
      // console.log(req.user)
      res.json(newGroup)
    }
    } catch {
      console.log(req.body)
      res.status(400).json('Bad Credentials');
      console.log("catch")
    }
}

async function detail(req, res) {
  const group = await Group.findById(req.params.id)
    .populate("user")
    .exec();
  group.years.sort()
  group.years.reverse();
  res.json(group);
}

async function yearDetail(req, res) {
  const group = await Group.findOne({
    _id: req.params.id,
  })
  res.json(group);
}

async function updateOne(req, res) {
  // Find the group Id to Update
  const group = await Group.findOne( {_id: req.params.id} );
  // Find the Year array to push to 
  const findSameYear = group.years.find(y => y.year === req.body.year)
  // If the year already exists, push only the video into that year
  try {
  if (findSameYear) {
    const videoArr = [...findSameYear.videoUrl];
    console.log(`New video for ${findSameYear.year}`)
    findSameYear.videoUrl.push(req.body.videoUrl);
    group.save()
    // window.location.reload(false)f
    if (videoArr.includes(req.body.videoUrl)) {
      console.log(`${req.body.videoUrl} is already in ${videoArr}`);
      const deleteVideo = findSameYear.videoUrl.indexOf(req.body.videoUrl);
      if (deleteVideo > -1) {
        findSameYear.videoUrl.splice(deleteVideo, 1);
        res.json(error)
      }
    }
  } else {
    console.log("New Year and New Video")
    group.years.push(req.body);
    group.save()
    res.json(group)
  }
} catch {
  res.status(400).json('Bad Credentials');
  console.log("catch")
}

} 
